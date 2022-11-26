const fileRegex = /\.(template)$/  //регулярное выражение для отбора файлов

export default function templatePlugin(){
    return {
        name: 'template-loader-plugin',

        transform(src, id) {
            if(fileRegex.test(id)) {
                return {
                    code: `export default function template(props = {}){return \`${src}\`}`,
                    map: null,
                }
            }
        }
    }
}