<script setup lang="ts">
import type { LocaleObject } from '@nuxtjs/i18n'

const { locales, locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const colorMode = useColorMode()
</script>

<template>
  <ul>
    <li
      v-for="l in (locales as LocaleObject[])"
      :key="l.code"
      :class="{
        'font-bold': l.code === locale,
      }"
    >
      <NuxtLink
        :to="switchLocalePath(l.code)"
      >
        {{ l.name }}
      </NuxtLink>
    </li>
  </ul>

  <select
    v-model="colorMode.preference"
    class="block bg-neutral-200 dark:bg-neutral-800"
  >
    <option value="system">
      System
    </option>
    <option value="light">
      Light
    </option>
    <option value="dark">
      Dark
    </option>
  </select>

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
