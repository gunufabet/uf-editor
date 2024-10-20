import { LanguageType } from "~/enums/lang-code";
import content from "~/assets/script/content.json";
import contentTH from "~/assets/script/th/content.json";
import contentSoccer from "~/assets/script/contentSoccer.json";
import contentSoccerTH from "~/assets/script/th/contentSoccer.json";

export function getContent() {
  const { locale } = useI18n();
  if (locale.value === LanguageType.THAILAND) {
    return contentTH;
  }

  return content;
}

export function getContentSoccer() {
  const { locale } = useI18n();
  if (locale.value === LanguageType.THAILAND) {
    return contentSoccerTH;
  }

  return contentSoccer;
}

export function formatAmount(value) {
  try {
    const { locale } = useI18n();
    return parseFloat(value).toLocaleString(locale.value, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  } catch (error) {
    return value;
  }
}

export function getDateSbApi(value) {
  try {
    const [date, time] = value.split(" ");
    return date;
  } catch (error) {}
  return value;
}

export function getTimeSbApi(value) {
  try {
    const [date, time] = value.split(" ");
    return time;
  } catch (error) {}
  return value;
}

export function processSection(section, type) {
  return section
    .filter((item) => item.__component === type)
    .map((item) => {
      let h4List = [];
      item?.contentListH4?.forEach((itemh4) => {
        h4List.push({
          title: itemh4?.title,
          content: itemh4?.content,
          defaultOpen: itemh4?.defaultOpen,
          design: itemh4?.deisgn?.data?.attributes?.design,
        });
      });

      return {
        title: item.title,
        content: item.content,
        defaultOpen: item.defaultOpen,
        menuId: item.menuId,
        design: item?.deisgn?.data?.attributes?.design,
        designWithUnderline: item.designUnderline,
        contentListH4: h4List,
      };
    });
}

export function processSectionWithMenu(section) {
  return section
    .map((item) => ({
      id: item.menuId,
      text: item.menuName,
      menuTabOrder: item.menuOrder,
    }))
    .sort((a, b) => a.menuTabOrder - b.menuTabOrder); // Sort by menuTabOrder
}

export function processSectionWithMenuContent(h2Items, h3Items) {
  return h2Items.map((h2Item) => ({
      menuTabId: h2Item.menuId,
      titleH2: h2Item.title,
      contentH2: h2Item.content,
      design: h2Item.design,
      contentListH3: h3Items.filter(h3Item => h3Item.menuId === h2Item.menuId)  // Group H3 items by menuTabId
  }));
}
