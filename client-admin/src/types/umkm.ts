export interface Umkm {
  description: string
  id: number
  path: string
  title: string
}

export interface UmkmAddDataForm {
  name: string
  description: string
  cardImage: File | null
  heroImage: File | null
  explanations: UmkmExplanation[]
}

export interface UmkmExplanation {
  title: string
  description: string
  img: File | null
}
