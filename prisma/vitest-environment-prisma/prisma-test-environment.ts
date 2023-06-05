import { Environment } from 'vitest'

export default <Environment>{
  name: 'prisma',
  async setup() {
    console.log('Qual código quero executar antes do meu teste?')

    return {
      teardown() {},
    }
  },
}
