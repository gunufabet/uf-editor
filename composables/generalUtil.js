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
          defaultOpen: itemh4?.defaultOpen || false,
          design: itemh4?.deisgn?.data?.attributes?.design,
          showTable: itemh4?.showTable || false,
          contentTable: {
            header: itemh4?.tableHeader,
            content: itemh4?.tableContent,
          },
        });
      });

      return {
        title: item.title,
        content: item.content,
        content2: item.content2,
        defaultOpen: item.defaultOpen || false,
        menuId: item?.menuId,
        design: item?.deisgn?.data?.attributes?.design,
        designWithUnderline: item?.designUnderline || false,
        contentListH4: h4List,
        soccerSetting: item?.SoccerSetting || item?.soccerSetting,
        soccerButton: item?.SoccerButton,
        showTable: item?.TableContent?.showTable || false,
        contentTable: {
          header: item?.TableContent?.tableHeader,
          content: item?.TableContent?.tableContent,
        },
        imgList: mapImgList(item?.ImgLIst?.imgList),
      };
    });
}

export function processSection2(section, type) {
  return section
    .filter((item) => item.__component === type)
    .map((item) => {
      let h4List = [];
      item?.contentListH4?.forEach((itemh4) => {
        h4List.push({
          title: itemh4?.title,
          content: itemh4?.content,
          defaultOpen: itemh4?.defaultOpen || false,
          design: itemh4?.deisgn?.data?.attributes?.design,
          showTable: itemh4?.showTable || false,
          contentTable: {
            header: itemh4?.tableHeader,
            content: itemh4?.tableContent,
          },
        });
      });

      return {
        title: item.title,
        content: item.content,
        content2: item.content2,
        defaultOpen: item.defaultOpen || false,
        menuId: item?.menuId,
        design: item?.deisgn?.data?.attributes?.design,
        designWithUnderline: item?.designUnderline || false,
        contentListH4: h4List,
        soccerSetting: item?.SoccerSetting || item?.soccerSetting,
        soccerButton: item?.SoccerButton,
        showTable: item?.TableContent?.showTable || false,
        contentTable: {
          header: item?.TableContent?.tableHeader,
          content: item?.TableContent?.tableContent,
        },
        imgList: mapImgList(item?.ImgLIst?.imgList),
      };
    });
}

export function processSectionWithMenu(section) {
  return section
    .map((item) => ({
      id: item.menuId,
      text: item.menuName,
      menuTabOrder: item.menuOrder,
      focusTab: item.focustTab,
    }))
    .sort((a, b) => a.menuTabOrder - b.menuTabOrder); // Sort by menuTabOrder
}

export function processSectionWithMenuContent(h2Items, h3Items) {
  return h2Items.map((h2Item) => ({
    menuTabId: h2Item.menuId,
    titleH2: h2Item.title,
    contentH2: h2Item.content,
    content2H2: h2Item.content2,
    design: h2Item.design,
    contentListH3: h3Items.filter((h3Item) => h3Item.menuId === h2Item.menuId), // Group H3 items by menuTabId
    showTable: h2Item?.showTable || false,
    contentTable: h2Item?.contentTable,
    soccerSetting: h2Item?.soccerSetting,
  }));
}

export function processSectionWithButton(section) {
  return section
    .map((item) => ({
      id: item.menuId,
      text: item.menuName,
      buttonOrder: item.menuOrder,
    }))
    .sort((a, b) => a.buttonOrder - b.buttonOrder); // Sort by menuTabOrder
}

export function processSectionWithButtonContent(h2Items, h3Items) {
  return h2Items.map((h2Item) => ({
    buttonId: h2Item.menuId,
    titleH2: h2Item.title,
    contentH2: h2Item.content,
    content2H2: h2Item.content2,
    design: h2Item.design,
    contentListH3: h3Items.filter((h3Item) => h3Item.menuId === h2Item.menuId), // Group H3 items by menuTabId
    soccerSetting: h3Items.soccerSetting,
  }));
}

export function processSectionSoccer(item) {
  return {
    title: item.title,
    content: item.content,
    defaultOpen: item.defaultOpen || false,
    menuId: item.menuId,
    design: item?.deisgn?.data?.attributes?.design,
    designWithUnderline: item.designUnderline || false,
    soccerSetting: item.soccerSetting,
  };
}

export function processSectionBonus(item) {
  return {
    title: item.title,
    content: item.content,
    defaultOpen: item.defaultOpen || false,
    menuId: item.menuId,
    design: item?.deisgn?.data?.attributes?.design,
    designWithUnderline: item.designUnderline || false,
    soccerSetting: item.soccerSetting,
    imgList: mapImgList(item.imgList),
  };
}

export function processSectionH2H4(item) {
  let h4List = [];
  item?.contentListH4?.forEach((itemh4) => {
    h4List.push({
      title: itemh4?.title,
      content: itemh4?.content,
      defaultOpen: itemh4?.defaultOpen || false,
      design: itemh4?.deisgn?.data?.attributes?.design,
      showTable: itemh4?.showTable || false,
      contentTable: {
        header: itemh4?.tableHeader,
        content: itemh4?.tableContent,
      },
    });
  });

  return {
    title: item.title,
    content: item.content,
    defaultOpen: item.defaultOpen || false,
    menuId: item.menuId,
    design: item?.deisgn?.data?.attributes?.design,
    designWithUnderline: item.designUnderline || false,
    soccerSetting: item.soccerSetting,
    imgList: mapImgList(item.imgList),
    contentListH4: h4List,
  };
}

export function mapImgList(imgSection) {
  return imgSection?.data?.map((item) => ({
    imgSrc: item?.attributes?.url,
    imgAlt: item?.attributes?.alternativeText,
  }));
}
