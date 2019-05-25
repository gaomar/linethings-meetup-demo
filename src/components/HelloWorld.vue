<template>
  <v-app id="inspire">
    <v-container>
      <v-layout
        text-xs-center
        wrap
      >
        <v-flex mb-4>
          <h1 class="display-2 font-weight-bold mb-3">
            認証画面
          </h1>
        </v-flex>

        <v-flex xs12>
          <v-form>
            <v-container>
              <v-layout row wrap>
                <v-text-field
                  v-model="name"
                  @keyup.enter="say"
                  @keypress="setCanSubmit"
                  outline
                  label="認証コードを入力してください"
                ></v-text-field>
              </v-layout>
            </v-container>
          </v-form>  
        </v-flex>

        <v-flex xs12>
          {{this.bleStatus}}
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        USER_SERVICE_UUID: 'b38c905b-9968-45b8-b392-04e62b8a7842',
        bleConnect: false,
        canSubmit: false,
        bleStatus: '',
        user: {
          image: '',
          userId: ''
        }        
      }
    },
    methods: {
      setCanSubmit () {
        this.canSubmit = true
      },
      // BLEが接続できる状態になるまでリトライ
      liffCheckAvailablityAndDo: async function (callbackIfAvailable) {
        try {
          const isAvailable = await liff.bluetooth.getAvailability();
          if (isAvailable) {
            callbackIfAvailable()
          } else {
            // リトライ
            this.bleStatus = `Bluetoothをオンにしてください。`
            setTimeout(() => this.liffCheckAvailablityAndDo(callbackIfAvailable), 10000)
          }
        } catch (error) {
          alert('Bluetoothをオンにしてください。')
        }
      },
      // サービスとキャラクタリスティックにアクセス
      liffRequestDevice: async function () {
        const device = await liff.bluetooth.requestDevice()
        await device.gatt.connect()
        const service = await device.gatt.getPrimaryService(this.USER_SERVICE_UUID)
        window.ledCharacteristic = await service.getCharacteristic(this.LED_CHARACTERISTIC_UUID)
        this.bleConnect = true
        this.bleStatus = `デバイスに接続しました。`
      },
      initializeLiff: async function(){
        await liff.initPlugins(['bluetooth']);
        this.liffCheckAvailablityAndDo(() => this.liffRequestDevice())

        // プロフゲット
        const profile = await liff.getProfile()
        this.user.image = profile.pictureUrl
        this.user.userId = profile.userId
      }
    },
    mounted: function () {
      liff.init(
          () => this.initializeLiff()
      )
    }
  }
</script>
