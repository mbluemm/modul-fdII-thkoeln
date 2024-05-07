---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

<VPTeamMembers
  size="medium"
  :members="[
      {
    avatar: 'https://www.th-koeln.de/pseimg/43d44629a79a63b551bfa569c40b7fb35ac9b347.png',
    name: 'Mirjam Blümm',
    title: 'Devine Master of Desaster',
    links: [
      { icon: 'github', link: 'https://github.com/mbluemm' }
    ]
  },
  {
    avatar: 'https://www.th-koeln.de/pseimg/43d44629a79a63b551bfa569c40b7fb35ac9b347.png',
    name: 'Mirjam Blümm',
    title: 'Devine Master of Desaster',
    links: [
      { icon: 'github', link: 'https://github.com/mbluemm' }
    ]
  },
  ]"
/>

</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      is tremendously awesome
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>