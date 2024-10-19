<template>
    <div v-if="content" class="match-calendar" style="cursor: pointer;">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
            <path
                d="M3.53892 14C1.29222 14 0 12.6334 0 10.2554V4.72111C0 2.51271 1.1161 1.17539 3.07652 0.997408V0.488583C3.07652 0.359003 3.12516 0.23473 3.21176 0.143103C3.29835 0.0514756 3.4158 0 3.53826 0C3.66072 0 3.77817 0.0514756 3.86476 0.143103C3.95135 0.23473 4 0.359003 4 0.488583V0.977166H8V0.488583C8 0.359003 8.04865 0.23473 8.13524 0.143103C8.22184 0.0514756 8.33928 0 8.46174 0C8.5842 0 8.70165 0.0514756 8.78824 0.143103C8.87484 0.23473 8.92348 0.359003 8.92348 0.488583V0.997408C10.8839 1.17539 12 2.51202 12 4.72111V10.2554C12 12.632 10.7078 14 8.46174 14H3.53892ZM0.923483 10.2554C0.923483 12.1176 1.781 13.0228 3.53958 13.0228H8.4624C10.2223 13.0228 11.0778 12.1155 11.0778 10.2554V5.59288H0.923483V10.2554ZM11.0759 4.61711C11.0468 2.99292 10.341 2.12464 8.92282 1.97667V2.44292C8.92282 2.5725 8.87418 2.69677 8.78758 2.7884C8.70099 2.88002 8.58354 2.9315 8.46108 2.9315C8.33862 2.9315 8.22118 2.88002 8.13458 2.7884C8.04799 2.69677 7.99934 2.5725 7.99934 2.44292V1.95433H4V2.44292C4 2.5725 3.95135 2.69677 3.86476 2.7884C3.77817 2.88002 3.66072 2.9315 3.53826 2.9315C3.4158 2.9315 3.29835 2.88002 3.21176 2.7884C3.12516 2.69677 3.07652 2.5725 3.07652 2.44292V1.97597C1.65831 2.12464 0.952507 2.99222 0.923483 4.61641L11.0759 4.61711ZM7.71768 10.7181C7.65962 10.6573 7.61462 10.584 7.58575 10.5031C7.55329 10.4253 7.53653 10.3411 7.53653 10.2561C7.53653 10.171 7.55329 10.0868 7.58575 10.009C7.61455 9.92808 7.65956 9.85474 7.71768 9.794C7.78914 9.71878 7.87703 9.66337 7.97357 9.63269C8.07011 9.60201 8.17231 9.597 8.27111 9.61811C8.31187 9.62391 8.35137 9.63713 8.38786 9.65719C8.42715 9.67133 8.46443 9.69105 8.49868 9.71582C8.53097 9.73983 8.56181 9.76594 8.59103 9.794C8.69911 9.91816 8.75762 10.0817 8.75435 10.2505C8.75107 10.4193 8.68625 10.5802 8.57345 10.6995C8.46064 10.8189 8.30859 10.8875 8.1491 10.8909C7.9896 10.8944 7.83502 10.8325 7.71768 10.7181ZM5.56398 10.7181C5.45159 10.5931 5.38798 10.4279 5.38588 10.2554C5.38667 10.1703 5.40349 10.0863 5.43536 10.0083C5.46408 9.92734 5.50909 9.85399 5.56728 9.7933C5.68624 9.67694 5.84229 9.61232 6.00429 9.61232C6.16629 9.61232 6.32233 9.67694 6.44129 9.7933C6.49932 9.85413 6.54431 9.92744 6.57322 10.0083C6.60502 10.0864 6.62184 10.1703 6.62269 10.2554C6.62281 10.3848 6.58662 10.5114 6.51871 10.619C6.45081 10.7267 6.35423 10.8106 6.24122 10.8602C6.12821 10.9097 6.00385 10.9227 5.88388 10.8974C5.76391 10.8721 5.65372 10.8097 5.56728 10.7181H5.56398ZM3.61346 10.8577C3.53868 10.8238 3.46996 10.7766 3.41029 10.7181C3.29795 10.5931 3.23435 10.4278 3.23219 10.2554C3.23304 10.1703 3.24986 10.0864 3.28166 10.0083C3.3105 9.9274 3.3555 9.85407 3.41359 9.7933C3.48548 9.71733 3.57396 9.66129 3.6712 9.63013C3.76844 9.59897 3.87144 9.59365 3.97108 9.61465C4.07073 9.63566 4.16394 9.68233 4.24247 9.75053C4.32101 9.81874 4.38244 9.90638 4.42133 10.0057C4.46023 10.105 4.47538 10.2129 4.46546 10.3199C4.45554 10.4269 4.42084 10.5297 4.36444 10.6191C4.30804 10.7085 4.23167 10.7819 4.1421 10.8326C4.05254 10.8834 3.95252 10.91 3.85092 10.9101C3.76863 10.9089 3.68741 10.8901 3.61214 10.8549L3.61346 10.8577ZM7.9215 8.57812C7.84581 8.54608 7.77679 8.49866 7.71834 8.43853L7.64446 8.34081C7.6209 8.30466 7.60225 8.26519 7.58905 8.22355C7.57116 8.18669 7.5587 8.14714 7.55211 8.10629C7.54528 8.06335 7.54109 8.01999 7.53958 7.97647C7.54192 7.80389 7.60576 7.63861 7.71834 7.51371C7.77684 7.45364 7.84585 7.40622 7.9215 7.37411C8.03381 7.32441 8.15754 7.31114 8.27698 7.336C8.39643 7.36085 8.5062 7.42271 8.59235 7.51371C8.70493 7.63861 8.76877 7.80389 8.77111 7.97647C8.76967 8.01999 8.76548 8.06336 8.75858 8.10629C8.75192 8.14713 8.73946 8.18666 8.72164 8.22355C8.70838 8.26516 8.68973 8.30463 8.66623 8.34081C8.64358 8.37501 8.61891 8.40765 8.59235 8.43853C8.47445 8.55735 8.31848 8.62466 8.15567 8.62698C8.0747 8.62667 7.99461 8.60911 7.92019 8.57533L7.9215 8.57812ZM5.76781 8.57812C5.69214 8.54603 5.62313 8.49861 5.56464 8.43853C5.45144 8.3144 5.38768 8.14896 5.38654 7.97647C5.38733 7.89144 5.40415 7.80744 5.43602 7.72938C5.46787 7.65017 5.51251 7.57743 5.56794 7.51441C5.62647 7.45438 5.69547 7.40697 5.77111 7.37481C5.88347 7.32548 6.00712 7.31241 6.12648 7.33725C6.24585 7.36209 6.35561 7.42373 6.44195 7.51441C6.55453 7.63931 6.61838 7.80459 6.62071 7.97717C6.6192 8.02068 6.61501 8.06405 6.60818 8.10699C6.6013 8.14776 6.58885 8.18726 6.57124 8.22425C6.55804 8.26588 6.53939 8.30536 6.51583 8.34151C6.49309 8.37563 6.46842 8.40826 6.44195 8.43923C6.32389 8.55821 6.16765 8.62553 6.00462 8.62768C5.9227 8.62755 5.84168 8.60974 5.76649 8.57533L5.76781 8.57812ZM3.61346 8.57812C3.53781 8.546 3.4688 8.49859 3.41029 8.43853C3.29715 8.31436 3.23339 8.14895 3.23219 7.97647C3.23311 7.89146 3.24993 7.80749 3.28166 7.72938C3.31365 7.65024 3.35828 7.57752 3.41359 7.51441C3.47231 7.45464 3.54127 7.40726 3.61675 7.37481C3.72937 7.32702 3.85265 7.31477 3.9717 7.33954C4.09076 7.36431 4.20048 7.42505 4.2876 7.51441C4.39994 7.63942 4.46354 7.80468 4.4657 7.97717C4.46448 8.0209 4.46051 8.06451 4.45383 8.10769C4.44737 8.14835 4.4349 8.18769 4.41689 8.22425C4.40378 8.26592 4.38512 8.30541 4.36148 8.34151C4.33894 8.37579 4.31426 8.40844 4.2876 8.43923C4.1697 8.55805 4.01373 8.62536 3.85092 8.62768C3.7688 8.62756 3.68755 8.60975 3.61214 8.57533L3.61346 8.57812Z"
                fill="url(#paint0_linear_1259_453)" />
            <defs>
                <linearGradient id="paint0_linear_1259_453" x1="11.172" y1="14" x2="-0.669637" y2="3.30009"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#CCAB67" />
                    <stop offset="0.5" stop-color="#AE874B" />
                    <stop offset="1" stop-color="#FCF3AC" />
                </linearGradient>
            </defs>
        </svg>
        By Month
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
            <path d="M8.119 1L4.56 4.559L1 1" stroke="#EBC76E" stroke-width="1.5" stroke-miterlimit="10"
                stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </div>

    <div v-for="(item, index) in content" :key="index" class="match-wrapper">        
        <div v-if="index === 0 || dateFormat(item.attributes.matchDate, 'MMM') !== dateFormat(content[index - 1].attributes.matchDate, 'MMM')"
            class="match-month">
            {{ dateFormat(item.attributes.matchDate, 'MMMM YYYY').toUpperCase() }}
        </div>
        <div v-if="index === 0 || item.attributes.matchDate !== content[index - 1].attributes.matchDate"
            class="match-date">
            {{ formatDate(item.attributes.matchDate) }}
        </div>

        <table class="match-table">
            <tbody>
                <tr style="cursor: pointer;">
                    <td>{{ item.attributes.matchTime }}</td>
                    <td>
                        <img :src="item.attributes?.homeFlagImg?.data?.attributes?.flag
        ? 'data:image/png;base64,' + item.attributes.homeFlagImg?.data?.attributes?.flag
        : '/img/soccer/icn-flag-placeholder.svg'
        " :alt="`${item.attributes.homeName}-flag`" class="team-flag-icn" />{{ item.attributes.homeName }}
                        <br><br><br><br>
                        <img :src="item.attributes.awayFlagImg?.data?.attributes?.flag
        ? 'data:image/png;base64,' + item.attributes.awayFlagImg?.data?.attributes?.flag
        : '/img/soccer/icn-flag-placeholder.svg'
        " :alt="`${item.attributes.awayName}-flag`" class="team-flag-icn" />{{ item.attributes.awayName }}
                    </td>
                    <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="9" viewBox="0 0 6 9" fill="none">
                            <path d="M1 1.00002L4.559 4.55902L1 8.11902" stroke="#9E874E" stroke-width="1.5"
                                stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <custom-button-1 v-if="content" :label="t('sport.button.viewMore')"></custom-button-1>
</template>

<script setup lang="ts">
import callApi from "~/helpers/call-api";
import { useDateFormat } from "@vueuse/shared";
const { t } = useI18n()

const content = ref();
const dateFormat = (data: Date, format: string) =>
    useDateFormat(data, format, {        
    }).value.replace('"', "");

const props = defineProps({
    leagueId: {
        type: String,
        default: 92
    },
});

onMounted(() => {
    fetchMatch()
})

async function fetchMatch() {
    const response = await callApi.getFixtures(props.leagueId);
    if (response.succ) {
        content.value = response.data
    }
}

function formatDate(matchDate: Date) {
    let fullnameOfDay = dateFormat(matchDate, "dddd");
    let nameOfDay = dateFormat(matchDate, "DD");
    let nameOfMonth = dateFormat(matchDate, "MMM");
    let suffix = getOrdinalSuffix(parseInt(nameOfDay, 10))
    // return dateFormat(matchDate, "dddd, DD MMM");
    return `${fullnameOfDay}, ${nameOfDay}${suffix} ${nameOfMonth}`;
}

function getOrdinalSuffix(day: Number) {
    if (day > 3 && day < 21) return 'th'; // 4th to 20th all get "th"
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}
</script>

<style lang="scss" scoped>
.match-wrapper {
    overflow-x: auto;
    color: #D9D9D9;
    width: 75%;
    margin: auto;
}

.match-calendar {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    background: #1B1B1D;

    color: #EBC76E;
    font-size: 14px;
    font-weight: 400;
    gap: 1rem;
    width: 75%;
    margin: auto;
}

.match-month {
    text-align: center;
    padding: 1rem;
    background: transparent;
    font-size: 16px;
    color: #EBC76E;
    font-weight: 600;
}

.match-date {
    text-align: center;
    padding: 1rem;
    background: linear-gradient(110deg, #EBC76E 0%, #BA8C4E 100%);
    color: #2B2B32;
    font-size: 16px;
}

.match-table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
}

// first column
td:nth-child(1) {
    width: 60px;
    text-align: center;
}

// last column
td:nth-child(3) {
    width: 10px;
}

/* The second column takes the remaining available width */
td:nth-child(2) {
    width: auto;
}

td {
    padding: 1rem 1rem 1rem 1rem;
    border-bottom: 1px solid rgba(204, 171, 103, 0.5);
}

.team-flag-icn {
    width: 18px;
    height: 18px;
    margin-right: 10px;
    vertical-align: middle;
}

@media only screen and (max-width:475px) {

    // first column
    td:nth-child(1) {
        width: 30px;
    }

    .match-wrapper {
        width: 100%;
    }

    .match-calendar {
        width: 100%;
    }
}
</style>