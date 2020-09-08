<template>
  <div class="form-grid">
    <h3 class="form-grid__header">{{ title }}</h3>

    <form class="form">
      <div class="form__item">
        <label class="form__label" for="name">Enter name</label>
        <input id="name" type="text" class="form__field" placeholder="Tom" v-model="user.name" />
      </div>

      <div class="form__item">
        <label class="form__label" for="surname">Enter surname</label>
        <input id="surname" type="text" class="form__field" placeholder="Pratt" v-model="user.surname" />
      </div>

      <div class="form__item">
        <label class="form__label" for="phone">Enter phone</label>
        <input id="phone" type="text" class="form__field" placeholder="0939824411" v-model="user.phone" />
      </div>

      <div class="form__item">
        <label class="form__label" for="email">Enter email</label>
        <input id="email" type="email" class="form__field" placeholder="lorem1222@gmail.com" v-model="user.email" />
      </div>

      <div class="form__item">
        <label class="form__label" for="import">Import JSON</label>
        <textarea id="import" class="form__field form__field_textarea" rows="10" v-model="importField" />

        <transition name="fade">
          <div class="error-popup">
            <span v-show="importError" class="error-popup__text">Invalid format</span>
          </div>
        </transition>
      </div>
    </form>

    <div class="form__actions">
      <div class="save-action">
        <el-button
          type="success"
          size="medium"
          plain
          @click="submitForm"
        >
          Save
        </el-button>

        <transition name="fade">
          <span v-show="popupVisibility" class="save-action__popup">{{ popup }}</span>
        </transition>
      </div>

      <router-link to="/">
        <el-button type="danger" size="medium" plain>Back</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Edit',
  data: () => ({
    user: {
      id: null,
      name: '',
      surname: '',
      phone: '',
      email: '',
    },
    importField: '',
    usersList: [],
    operation: 'add',
    popupVisibility: false,
    importError: false,
  }),
  computed: {
    title() {
      return this.operation === 'add' ? 'Adding new user' : 'Editing user'
    },
    popup() {
      return this.operation === 'add' ? 'Added' : 'Edited'
    },
  },
  watch: {
    importField(value) {
      try {
        let user = JSON.parse(value)
        this.user.name = user.name
        this.user.surname = user.surname
        this.user.phone = user.phone
        this.user.email = user.email
        this.importError = false
      } catch(err) {
        this.importError = true
      }
    }
  },
  created() {
    this.usersList = JSON.parse(localStorage.getItem('usersList'))
    let userId = this.$route.params.id
    if (this.usersList.find(item => item.id == userId)) {
      this.user = this.usersList.find(item => item.id == userId)
      this.operation = 'change'
    } else {
      this.user.id = userId
      this.operation = 'add'
    }
  },
  methods: {
    submitForm() {
      let modifiedUser = {
        id: this.user.id,
        name: this.user.name || '-',
        surname: this.user.surname || '-',
        phone: this.user.phone || '-',
        email: this.user.email || '-',
      }

      let index = this.usersList.findIndex(item => item.id == modifiedUser.id)

      if (index === -1) {
        this.usersList.push(modifiedUser)
      } else {
        this.usersList.splice(index, 1, modifiedUser)
      }

      let modifiedList = JSON.stringify(this.usersList)
      localStorage.setItem('usersList', modifiedList)
      this.togglePopup()
    },
    togglePopup() {
      this.popupVisibility = true

      setTimeout(() => {
        this.popupVisibility = false
      }, 2000)
    },
  }
}
</script>

<style lang="scss">
.form-grid {
  width: 100%;
  max-width: 350px;
  margin: 100px auto 0;

  &__header {
    margin: 0 auto 30px;
    text-align: center;
    font-size: 2rem;
    font-weight: 300;
  }
}

.form {
  width: 100%;

  &__item {
    width: 100%;
    margin-bottom: 15px;
  }

  &__label {
    display: block;
    margin-bottom: 5px;
    font-size: 0.8rem;
  }

  &__field {
    box-sizing: border-box;
    width: 100%;
    height: 35px;
    padding: 0 15px;
    border: 1px solid #DCDFE6;
    border-radius: 4px;
    outline: none;
    box-shadow: none;

    &_textarea {
      height: auto;
      padding: 15px;
    }
  }

  &__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 10px;
  }
}

.save-action {
  display: flex;
  align-items: center;

  &__popup {
    margin-left: 10px;
    font-size: .9rem;
    color: #67C23A;
  }
}

.error-popup {
  height: 20px;

  &__text {
    font-size: .9rem;
    color: #F56C6C;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: 200ms ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
