<template>
  <Page title="Users table">
    <router-link :to="{ name: 'edit', params: { id: lastId } }">
      <el-button type="success" size="medium" plain>Add user</el-button>
    </router-link>

    <template #body>
      <div class="table-grid">
        <table class="table" border="0" cellspacing="0" cellpadding="0">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in parsedUsers"
              :key="index"
            >
              <td>{{ item.id + 1 }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.surname }}</td>
              <td>{{ item.phone }}</td>
              <td>{{ item.email }}</td>
              <td>
                <router-link :to="{ name: 'edit', params: { id: item.id } }" class="mx-2">
                  <el-button type="primary" icon="el-icon-edit" circle plain></el-button>
                </router-link>

                <el-button
                  type="danger"
                  icon="el-icon-delete"
                  circle
                  plain
                  @click="deleteUser(index)"
                >
                </el-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </Page>
</template>

<script>
import Page from "@/components/Page";
export default {
  name: 'Home',
  components: { Page },
  data: () => ({
    usersList: localStorage.getItem('usersList')
  }),
  computed: {
    parsedUsers() {
      return JSON.parse(this.usersList)
    },
    lastId() {
      return this.parsedUsers[this.parsedUsers.length - 1].id + 1
    }
  },
  methods: {
    deleteUser(index) {
      let usersList = JSON.parse(this.usersList)
      usersList.splice(index, 1)
      let modifiedList = JSON.stringify(usersList)
      this.usersList = modifiedList
      localStorage.setItem('usersList', modifiedList)
    }
  },
}
</script>

<style lang="scss">
.table-grid {
  max-height: 78vh;
  overflow-y: auto;
}

.table {
  height: 100%;
  width: 100%;
  font-size: .9rem;
  color: #606266;

  tbody {
    tr:nth-child(2n+1) {
      background-color: #E4E7ED;
    }
  }

  tr {
    th:first-child, td:first-child {
      padding-left: 15px;
    }

    th:last-child, td:last-child {
      padding-right: 15px;
      text-align: right;
    }
  }

  th, td {
    padding: 8px;
    text-align: left;
  }
}

.mx-2 {
  margin-left: .2rem;
  margin-right: .2rem;
}
</style>
