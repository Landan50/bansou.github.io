
import { useI18n } from 'vue-i18n';
// import { useRoute } from 'vue-router'

export const useI18nTools = () => {
  const { locale } = useI18n();
  return { locale };
}