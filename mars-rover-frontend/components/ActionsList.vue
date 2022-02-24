<template>
    <v-list-item>
        <v-list-item-avatar>
            <v-icon>{{ icon }}</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
            {{ text }}
        </v-list-item-content>
    </v-list-item>
</template>

<script>
export default {
    data() {
        return {
            icon: this.getIcon(this.action),
            text: this.getText(this.action),
        }
    },
    props: {
        action: '',
    },
    methods: {
        getIcon(value) {
            let icon
            switch (value) {
                case 'FW':
                    icon = 'mdi-arrow-up'
                    break
                case 'BW':
                    icon = 'mdi-arrow-down'
                    break
                case 'TL':
                    icon = 'mdi-arrow-left'
                    break
                case 'TR':
                    icon = 'mdi-arrow-right'
                    break
            }

            return icon
        },
        getText(value) {
            let text
            switch (value) {
                case 'FW':
                    text = 'Forward'
                    break
                case 'BW':
                    text = 'Backward'
                    break
                case 'TL':
                    text = 'Turn left'
                    break
                case 'TR':
                    text = 'Turn right'
                    break
            }

            return text
        },
    },
}
</script>

<style lang="scss" scoped></style>
