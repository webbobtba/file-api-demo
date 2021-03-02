import 'alpinejs'
import 'regenerator-runtime/runtime'


window.fileApp = () => {
    return {
        fileHandle: null,

        picked: false,

        content: '',

        async open () {
            [ this.fileHandle ] = await window.showOpenFilePicker({
                types: [{
                    description: 'Text Files',
                    accept: {
                        'text/plain': ['.txt', '.text'],
                        'text/html': ['.html', '.htm']
                    }
                }]
            })
            const file = await this.fileHandle.getFile()
            const body = await file.text()

            this.content = body
            this.picked = true
        },

        async save () {
            if (!this.fileHandle) return
            const writable = await this.fileHandle.createWritable()
            await writable.write(this.content)
            await writable.close()
        }
    }
}