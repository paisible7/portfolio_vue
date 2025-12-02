<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const resize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  resize()

  const codeSnippets = [
    'const', 'function', 'return', 'import', 'export',
    '=>', '{}', '()', '[]', 'async', 'await',
    'useState', 'useEffect', 'VueJs', 'TypeScript',
    'Flutter', 'Python', 'Photoshop', 'Django',
    '<div>', '</div>', 'class', 'onClick',
    'map', 'filter', 'Figma', 'props', 'state',
    'while', 'for', 'input', 'return', 'push',
    'git', 'pull', 'merge', 'tailwindcss', 'commit',
    'Java', 'pull', 'JavaScript', 'Kotlin', 'Linux',
  ]

  class CodeParticle {
    x: number
    y: number
    text: string
    speed: number
    opacity: number
    fontSize: number

    constructor() {
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
      this.speed = 0.2 + Math.random() * 0.5
      this.opacity = 0.1 + Math.random() * 0.3
      this.fontSize = 12 + Math.random() * 8
    }

    update() {
      this.y += this.speed
      if (this.y > canvas.height) {
        this.y = -20
        this.x = Math.random() * canvas.width
      }
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.font = `${this.fontSize}px 'Courier New', monospace`
      ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`
      ctx.fillText(this.text, this.x, this.y)
    }
  }

  const particles: CodeParticle[] = []
  for (let i = 0; i < 50; i++) particles.push(new CodeParticle())

  let raf = 0
  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    particles.forEach(p => { p.update(); p.draw(ctx) })
    raf = requestAnimationFrame(animate)
  }

  animate()

  const onResize = () => resize()
  window.addEventListener('resize', onResize)

  onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize)
    cancelAnimationFrame(raf)
  })
})
</script>

<template>
  <canvas ref="canvasRef" class="fixed inset-0 z-0 pointer-events-none" aria-hidden="true" />
</template>

<style scoped>
/* Optionnel: un dégradé de fond sous le canvas, si souhaité
:root {
  --bg-from: #000000;
  --bg-via: #0f172a;
  --bg-to: #0b2b63;
}

.background-gradient {
  position: fixed;
  inset: 0;
  background: linear-gradient(135deg, var(--bg-from), var(--bg-via), var(--bg-to));
  z-index: -1;
}
*/
</style>
