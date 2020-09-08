<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  let usersList = JSON.stringify([
    {
      id: 0,
      name: 'Anna',
      surname: 'Strong',
      phone: '093 98 244 11',
      email: 'lorem1222@gmail.com'
    },
    {
      id: 1,
      name: 'Milano',
      surname: 'Esco',
      phone: '093 98 244 11',
      email: 'lorem1222@gmail.com'
    },
    {
      id: 2,
      name: 'Nick',
      surname: 'Bold',
      phone: '093 98 244 11',
      email: 'lorem1222@gmail.com'
    },
    {
      id: 3,
      name: 'Wilton',
      surname: 'Delton',
      phone: '093 98 244 11',
      email: 'lorem1222@gmail.com'
    },
    {
      id: 4,
      name: 'Sam',
      surname: 'Stone',
      phone: '093 98 244 11',
      email: 'lorem1222@gmail.com'
    },
    {
      id: 5,
      name: 'John',
      surname: 'Dread',
      phone: '093 98 244 11',
      email: 'lorem1222@gmail.com'
    },
    {
      id: 6,
      name: 'Nicola',
      surname: 'Gizmo',
      phone: '093 98 244 11',
      email: 'lorem1222@gmail.com'
    },
  ])
  localStorage.setItem('usersList', usersList)
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}
</style>
