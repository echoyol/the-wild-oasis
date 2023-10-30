import supabase, { supabaseUrl } from './supabase'

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*')

  if (error) {
    console.error(error)
    throw new Error('Cabins could not be loaded')
  }
  return data
}

export async function createCabin(newCabin) {
  const imageName=`${Math.random()}-${newCabin.image.name}`.replaceAll("/","")

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`
  //https://tiwojkekzvasndhxuaku.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

  //1. create cabin
  const { data, error } = await supabase
    .from('cabins')
    .insert([...newCabin,image:imagePath])
    .select()

  if (error) {
    console.error(error)
    throw new Error('Cabins could not be deleted')
  }

  //2. upload image

  return data
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id)

  if (error) {
    console.error(error)
    throw new Error('Cabins could not be deleted')
  }
  return data
}