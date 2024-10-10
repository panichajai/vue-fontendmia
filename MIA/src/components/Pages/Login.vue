<template>
    <v-app>
        <v-main class="main-container">
            <v-container class="container">
                <v-col class="left-side text">
                    <div>
                        <v-img src="/logo_yellow_circle.png" alt="Logo" class="logo"></v-img>
                    </div>
                    <div class="header-left">
                        MIA Agent
                    </div>
                </v-col>
                <v-col class="right-side">
                    <div  class="header-right text">
                        <div>เข้าสู่ระบบ</div>
                        <div>Customer <span>มิตรแท้ประกันภัย</span></div>
                    </div>
                    <div>
                        <label class="text custom-label">อีเมล</label>
                        <v-text-field ></v-text-field>
                        <label class="text custom-label">รหัสผ่าน</label>
                        <v-text-field></v-text-field>
                    </div>
                    <v-btn @click="goToAboutPage" color="yellow">เข้าสู่ระบบ</v-btn>
                </v-col>
            </v-container>
        </v-main>
    </v-app>  
  </template>

<script>
export default {
    methods: {
    goToAboutPage() {
        this.$router.push({ name: 'CustomerList' })
    }
  }
}
</script>

<style scoped>

    .main-container {
        display: flex;
        align-items: center;
        justify-content: center;              
        background-color: #006F68;
        background-color: rgba(0, 111, 104, 0.8); 
    }

    .container {
        display: flex;
        background-color: #ffffff;
        max-width: max-content;
        max-height: max-content; 
    }
    
    .text {
        color: #006F68;
    }

    .left-side {
        display: flex;
        flex-direction: column; 
        gap: 80px;
    }

    .header-left {
        font-size: 46px;
        font-weight: bold;
        color: #006F68;
        padding-left: 48px;
    }
    
  
    .logo {
        width: 80px;
        height: 80px;
        margin-left: 48px;
    }

    .right-side {
        display: flex;
        flex-direction: column; 
        flex: 1;
        gap: 24px;
    }

    .header-right {
        font-weight: bold;
        font-size: 30px;
    }

</style>