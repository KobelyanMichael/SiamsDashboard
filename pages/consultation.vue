<template>
    <v-app id="inspire">
        <Navbar />

        <v-main class="bg-grey-lighten-3">
            <v-app id="inspire">


                <v-main class="bg-grey-lighten-3">
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="2">
                                <v-sheet rounded="lg" min-height="268">
                                    <v-list lines="two">

                                        <template v-for="n in 6" :key="n">
                                            <v-list-item>

                                                <v-list-item-title>
                                                    <v-btn href="/inbox">консультация</v-btn> 
                                                </v-list-item-title>

                                            </v-list-item>

                                            <v-divider v-if="n !== 6" :key="`divider-${n}`" inset></v-divider>
                                        </template>
                                    </v-list>

                                </v-sheet>
                            </v-col>

                            <v-col cols="12" sm="8">
                                <v-sheet min-height="70vh" rounded="lg">
                                    <!--  -->
                                </v-sheet>
                            </v-col>

                            <v-col cols="12" sm="2">
                                <v-sheet rounded="lg" min-height="268">
                                    <v-list lines="two">

                                        <template v-for="n in 1" :key="n">
                                            <v-list-item>

                                                <v-list-item-title>
                                                    <v-btn href="/">Рассписание</v-btn>
                                                </v-list-item-title>

                                            </v-list-item>

                                            <v-divider v-if="n !== 6" :key="`divider-${n}`" inset></v-divider>
                                        </template>
                                    </v-list>
                                </v-sheet>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-main>
            </v-app>
        </v-main>
    </v-app>
</template>
 
