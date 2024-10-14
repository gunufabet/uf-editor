<template>
    <div class="modal" id="login-modal">
        <div class="modal-content">
            <div class="logo-header">
                <img class="img-logo" src="/img/ubet-logo.png" alt="ufabet logo">
            </div>

            <form class="login-form">
                <div class="login-input-container">
                    <img class="imgLeft" src="/img/icn-user.svg" alt="username icon">
                    <span v-if="!inputUsername" class="login-placeholder">username</span>
                    <input class="login-field" type="text" id="username" name="username" v-model="inputUsername">
                </div>

                <div class="login-input-container">
                    <img class="imgLeft" src="/img/icn-password.svg" alt="username icon">
                    <span v-if="!inputPassword" class="login-placeholder">password</span>
                    <input class="login-field" :type="!showPassword ? 'password' : 'text'" id="password" name="password"
                        v-model="inputPassword">

                    <img class="imgRight"
                        :src="!showPassword ? '/img/icn-show-password.svg' : '/img/icn-hide-password.svg'"
                        alt="view password" @click="showPassword = !showPassword">
                </div>

            </form>

            <button class="login-btn" id="sign-up">Login</button>
            <div class="login-footer">
                <button>
                    <div class="join-now">Join Now</div>
                </button>
                <button>
                    <div class="forgot-pw">Forgot password?</div>
                </button>
            </div>
            <div class="close-modal">
                <img src="/img/icn-close.svg" alt="close login modal" @click="clickClose">
            </div>
        </div>
    </div>
    <div>

    </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const inputUsername = ref('')
const inputPassword = ref('')
const showPassword = ref(false)
const emit = defineEmits(['close'])

function clickClose() {
    emit('close')
}

onMounted(() => {
    const modalElement = document.getElementById('login-modal')
    if (modalElement) {
        modalElement.addEventListener('click', closeModal)
    }
})

onBeforeUnmount(() => {
    const modalElement = document.getElementById('login-modal')
    if (modalElement) {
        modalElement.removeEventListener('click', closeModal)
    }
})

function closeModal(event: any) {
    if (!event.target.classList.contains('modal')) {

    } else {
        emit('close')
    }
}

</script>

<style scoped lang="scss">
.modal {
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
    position: relative;
    margin: 15% auto;
    padding: 20px;
    max-width: 322.582px;
    flex-shrink: 0;
    border-radius: 13px;
    border: 1px solid rgba(247, 199, 151, 0.30);
    background: linear-gradient(0deg, rgba(128, 126, 117, 0.75) -0.04%, rgba(23, 21, 22, 0.75) -0.04%, rgba(97, 97, 95, 0.75) 97.15%);
    backdrop-filter: blur(7px);
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.logo-header {
    display: flex;
    justify-content: center;
    padding: 1.5rem 0 0.5rem 0;
}

.img-logo {
    max-width: 134px;
    max-height: 23px;
    flex-shrink: 0;
}

.login-btn {
    width: 100%;
    min-height: 44px;
    flex-shrink: 0;
    margin-top: 0.5rem;
    // margin: 15% auto;
    // margin: 1rem;
    border-radius: 15px;
    border: 1px solid #ECCA77;
    background: var(--btn1, linear-gradient(270deg, #8B6832 0.05%, #FCDD9A 51.59%, #966B2A 100%));

    color: #0A0425;
    text-align: center;
    text-shadow: 0px 1px 1px rgba(239, 219, 161, 0.68);
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.login-footer {
    display: flex;
    justify-content: space-between;
    padding: 2rem 0 0.5rem 0;

    .join-now {
        color: #FDD387;
        text-align: center;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        cursor: pointer;
    }

    .forgot-pw {
        color: #CDCDCD;
        text-align: center;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 14px;
        cursor: pointer;
    }
}

.login-field {
    width: 100%;
    min-height: 44px;
    flex-shrink: 0;
    background: rgba(0, 0, 0, 0.50);

    border-image: linear-gradient(270deg, #c4984e00, #f6d780 48.99%, #c4984e00);
    border-image-slice: 1;
    border-style: solid;
    border-width: 0 0 2px;
    border-radius: 15px;

    margin-top: 1rem;

    color: #fff;
    padding-left: 45px;
    box-sizing: border-box;
}

.login-form {
    padding: 1rem 0 1rem 0;
    width: 100%;
}

.login-input-container {
    position: relative;
    width: 100%;
}

.imgLeft {
    position: absolute;
    top: 27px;
    left: 14px;
}

.imgRight {
    position: absolute;
    top: 32px;
    right: 14px;
    cursor: pointer;
}

.login-placeholder {
    position: absolute;
    top: 29.5px;
    left: 45px;

    color: #FBDEB2;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.5;
}

.close-modal {
    position: absolute;
    bottom: -50px;
    left: 48%;
    cursor: pointer;
}

@media only screen and (max-width:475px) {
    .modal-content {
        margin: 30% auto;
        max-width: 270px
    }
}
</style>