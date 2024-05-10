<script setup lang="ts">
useHead({
    title: 'Adi Wira Pratama Web Portfolio',
    link: [
        { rel: 'canonical', href: 'https://nuxt.com/' }
    ],
    meta: [
        { 
            name: 'viewport', 
            content: 'width=device-width, initial-scale=1' 
        },
        {
            name: 'description',
            content: 'Learn more about Adi Wira Pratama, a fullstack web developer majoring in industrial engineering\'s project here' 
        },
        { 
            property: 'og:title', 
            content: 'Adi Wira Pratama Web Portfolio' 
        },
        { 
            property: 'og:description', 
            content: 'Learn more about Adi Wira Pratama, a fullstack web developer majoring in industrial engineering\'s project here' 
        },
        { 
            property: 'og:type', 
            content: 'website' 
        },
        { 
            property: 'og:url', 
            content: 'https://wira-pratama.github.io' 
        },
        { 
            property: 'og:locale', 
            content: 'en_US' 
        },
        { 
            property: 'og:image', 
            content: 'https://wira-pratama.github.io' 
        },
    ],
    htmlAttrs: { 
        lang: 'id' 
    },
});

const websiteType:any = ref('company-profile');
</script>

<template>
    <section 
        class="
            min-h-[50vh] pt-12 md:pt-20 px-8 md:px-20 pb-8 mb-2 flex flex-col space-y-2 items-center shadow-lg
        "
    >
        <h1 class="font-primary text-2xl md:text-6xl md:pb-8">Adi Wira Pratama</h1>
        <ul class="font-secondary text-xl flex flex-col items-center md:flex-row md:space-x-2">
            <NuxtLink class="flex flex-row items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                </svg>
                <span class="text-lg">
                    adiwira85pratama@gmail.com
                </span>
            </NuxtLink>
            <NuxtLink class="flex flex-row items-center space-x-2" to="https://www.linkedin.com/in/adi-wira-pratama/" rel="external" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </svg>
                <span class="text-lg">
                    adi-wira-pratama
                </span>
            </NuxtLink>
            <NuxtLink class="flex flex-row items-center space-x-2" to="https://github.com/wira-pratama" rel="external" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
                <span class="text-lg">
                    wira-pratama
                </span>
            </NuxtLink>
        </ul>
        <div class="join join-vertical md:join-horizontal w-full py-8 justify-center">
            <button 
                class="join-item btn h-fit font-primary shadow border" 
                @click="websiteType = 'company-profile'"
                :class="websiteType == 'company-profile' ? 'btn-neutral' : 'btn-outline'"
            >
                <div class="flex flex-col space-y-2 items-center p-4">
                    <h2 class="text-xl font-medium">
                        Company Profile Website
                    </h2>
                    <p class="font-thin">
                        Start from <br>
                        Rp 1.300.000
                    </p>
                </div>
                
            </button>
            <button 
                class="join-item btn h-fit font-primary shadow border" 
                @click="websiteType = 'competition'"
                :class="websiteType == 'competition' ? 'btn-neutral' : 'btn-outline'"
            >
                <div class="flex flex-col space-y-2 items-center p-4">
                    <h2 class="text-xl font-medium">
                        Competition Website
                    </h2>
                    <p class="font-thin">
                        Start from <br>
                        Rp 5.000.000
                    </p>
                </div>
            </button>
            <button 
                class="join-item btn h-fit font-primary shadow border" 
                @click="websiteType = 'application'"
                :class="websiteType == 'application' ? 'btn-neutral' : 'btn-outline'"
            >
                <div class="flex flex-col space-y-2 items-center p-4">
                    <h2 class="text-xl font-medium">
                        Application Website
                    </h2>
                    <p class="font-thin">
                        Start from <br>
                        Rp 4.000.000
                    </p>
                </div>
            </button>
            <button 
                class="join-item btn h-fit font-primary shadow border" 
                @click="websiteType = 'e-commerce'"
                :class="websiteType == 'e-commerce' ? 'btn-neutral' : 'btn-outline'"
            >
                <div class="flex flex-col space-y-2 items-center p-4">
                    <h2 class="text-xl font-medium">
                        E-Commerce Website
                    </h2>
                    <p class="font-thin">
                        Start from <br>
                        Rp 8.000.000
                    </p>
                </div>
            </button>
        </div>
    </section>
    <section 
        class="
            flex flex-col pb-8 mb-8 items-center css-grid bg-base-200 px-8 md:px-20 py-4
        "
    >
        <div class="w-full" v-show="websiteType == 'company-profile'">
            <Projects
                
                :projects_title="'Company Profile Websites'"
            >
                <Project
                    :title="'Shooters Basketball Jakarta'"
                    :images="[
                        '/sbc.png',
                    ]"
                    :date="'2024'"
                    :descriptors="[
                        'company profile',
                        'three sections'
                    ]"
                    :external_link="'sbcshooters.com'"
                />
                <Project
                    :title="'Sorgtime'"
                    :images="[
                        '/sorgtime.png',
                    ]"
                    :date="'2023'"
                    :descriptors="[
                        'company profile',
                        'three sections'
                    ]"
                    :external_link="'sorgtime.com'"
                />
                <Project
                    :title="'Bengkel On The Road'"
                    :images="[
                        '/beo.png',
                    ]"
                    :date="'2023'"
                    :descriptors="[
                        'company profile',
                        'three sections'
                    ]"
                    :external_link="'bengkelontheroad.com'"
                />
            </Projects>
        </div>
        <div class="w-full" v-show="websiteType == 'competition'">
            <Projects
                
                :projects_title="'Competition Websites'"
            >
                <Project
                    :title="'Inchall x Summercamp'"
                    :images="[
                        '/inchallsc2024.png',
                    ]"
                    :date="'2024'"
                    :descriptors="[
                        'company profile',
                        'three sections'
                    ]"
                    :external_link="'inchallsc.com'"
                />
            </Projects>
        </div>
        <div class="w-full" v-show="websiteType == 'application'">
            <Projects
                
                :projects_title="'Application Websites'"
            >
                <Project
                    :title="'svgdiagram.com'"
                    :images="[
                        '/svgdiagram.png',
                    ]"
                    :date="'2024'"
                    :descriptors="[
                        'company profile',
                        'three sections'
                    ]"
                    :external_link="'svgdiagram.com'"
                />
                <Project
                    :title="'Bandar Safety'"
                    :images="[
                        '/bandarsafety.png',
                    ]"
                    :date="'2023'"
                    :descriptors="[
                        'company profile',
                        'three sections'
                    ]"
                    :external_link="'bandarsafety.com'"
                />
                <Project
                    :title="'Safety Canvas'"
                    :images="[
                        '/safety-canvas.png',
                    ]"
                    :date="'2023'"
                    :descriptors="[
                        'company profile',
                        'three sections'
                    ]"
                    :external_link="'safety-canvas.web.app'"
                />
                <Project
                    :title="'ErgoKu'"
                    :images="[
                        '/its-ergoku.png',
                    ]"
                    :date="'2023'"
                    :descriptors="[
                        'company profile',
                        'three sections'
                    ]"
                    :external_link="'its-ergoku.web.app'"
                />
            </Projects>
        </div>
        <div class="w-full" v-show="websiteType == 'e-commerce'">
            <Projects
                
                :projects_title="'E-Commerce Websites'"
            >
                <Project
                    :title="'KlikBan'"
                    :images="[
                        '/klikban.png',
                    ]"
                    :date="'2024'"
                    :descriptors="[
                        'company profile',
                        'three sections'
                    ]"
                    :external_link="'klikban.id'"
                />
            </Projects>
        </div>
    </section>
</template>

<style>
* {
  transition: all 0.5s ease-out;
}
.css-grid {
    height: 100%;
    width: 100%;
    margin: 0;
}
.css-grid {
    background:radial-gradient(#08041b 0.9500000000000001px, #ffffff 0.9500000000000001px);
    background-size: 71px 71px;
}
</style>