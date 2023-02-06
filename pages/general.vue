<template>
    <v-app id="inspire">
    <Navbar />
  
      <v-main class="bg-grey-lighten-3">
        <v-container>
          <v-row>
            <v-col cols="2">
              <v-sheet rounded="lg">
                <v-list rounded="lg">
                  <v-list-item
                
                    link
                  >
                    <v-list-item-title>
                   Запись на прием
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item
                
                    link
                  >
                    <v-list-item-title>
                  Консультация
                    </v-list-item-title>
                  </v-list-item>
  
                  <v-divider class="my-2"></v-divider>
  
                  <v-list-item
                    link
                    color="grey-lighten-4"
                  >
                    <v-list-item-title>
                      Анализы
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-sheet>
            </v-col>
  
            <v-col>
              <v-sheet
                min-height="70vh"
                rounded="lg"
              >
            <AppForm />
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
 