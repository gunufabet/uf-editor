import content from "~/assets/script/content.json";
import contentTH from "~/assets/script/th/content.json";

export function getContent() {
  const { locale } = useI18n();
  if (locale.value === "th") {
    return contentTH;
  }

  return content;
}
