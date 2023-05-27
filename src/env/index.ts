import 'dotenv/config'
import { z } from 'zod'

// Objeto contendo todas as variáveis de ambiente do sistema

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  PORT: z.coerce.number().default(3333),
})

// Utilização da função 'safeParse' do zod para validação do schema com as variáveis de ambiente definidas

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error('Invalid environment variables', _env.error.format())

  throw new Error('Invalid environment variables.')
}

export const env = _env.data
