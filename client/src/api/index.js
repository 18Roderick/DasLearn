export const fetchModulos = async (url, options) => {
  try {
    const reponse = await fetch('/api/modulos') 
    const data = reponse.ok ? reponse.json() : { error: 'no data' }
    return data;

  } catch (error) {
    return error
  }
}
