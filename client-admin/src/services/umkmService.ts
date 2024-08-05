import { AxiosError } from 'axios'
import axiosInstance from '@/axios/instance'
import type { UmkmAddDataForm, UmkmExplanation } from '@/types/umkm'
import fileToBlob from '@/utils/fileToBlob'
import jpegToPng from '@/utils/jpegToPng'

export async function getUmkmList() {
  try {
    const { data } = await axiosInstance.get('/umkm')
    return data
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.response?.statusText)
      console.error(error.response?.status)
    }
  }
}

export async function postUmkm({ name: title, description, cardImage: cardImageFile, heroImage: heroImageFile, explanations }: UmkmAddDataForm) {
  cardImageFile = await jpegToPng(cardImageFile!)
  heroImageFile = await jpegToPng(heroImageFile!)

  const cardImageName = cardImageFile.name.split(' ').join('_')
  const heroImageName = heroImageFile.name.split(' ').join('_')

  try {
    const { data } = await axiosInstance.post('/umkm', {
      title,
      description,
      cardImageFile,
      cardImageName,
      heroImageFile,
      heroImageName,
    }, { headers: { 'Content-Type': 'multipart/form-data' } })
    await postUmkmExplanations({ explanationDataList: explanations, umkmId: data.umkmId })
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.response?.statusText)
      console.error('error Data', error.response?.data)
      console.error(error.cause)
    }
  }
}

async function postUmkmExplanations({ explanationDataList, umkmId }: { explanationDataList: UmkmExplanation[], umkmId: number }) {
  explanationDataList.forEach(async ({ title, description, img: imageFile }) => {
    imageFile = await jpegToPng(imageFile!)
    const imageName = imageFile.name.split(' ').join('_')

    // TODO: Implement this function
    // [x]: title
    // [x]: description
    // [x]: imgFile
    // [x]: imgName
    // [x]: umkmId

    try {
      await axiosInstance.post(`/umkm/${umkmId}/explanation`, {
        title,
        description,
        imageFile,
        imageName,
      }, { headers: { 'Content-Type': 'multipart/form-data' } })
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error.response?.statusText)
        console.error('error Data', error.response?.data)
        console.error(error.cause)
      }
    }
  })
}
