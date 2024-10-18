import content from "~/assets/script/content.json";
import contentTH from "~/assets/script/th/content.json";
import contentSoccer from '~/assets/script/contentSoccer.json'
import contentSoccerTH from '~/assets/script/th/contentSoccer.json'

export function getContent() {
  const { locale } = useI18n();
  if (locale.value === "th") {
    return contentTH;
  }

  return content;
}

export function getContentSoccer() {
  const { locale } = useI18n();
  if (locale.value === "th") {
    return contentSoccerTH;
  }

  return contentSoccer;
}

export function formatAmount(value) {
  try {
    return parseFloat(value).toLocaleString('en', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  } catch (error) {
    return value
  }
}

export function getDateSbApi(value) {
  try {
      const [date, time] = value.split(' ');
      return date;
  } catch (error) {

  }
  return value
}

export function getTimeSbApi(value) {
  try {
      const [date, time] = value.split(' ');
      return time;
  } catch (error) {

  }
  return value
}