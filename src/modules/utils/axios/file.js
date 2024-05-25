import API from 'modules/constants/API'
import Axios from 'modules/utils/Axios'

export const uploadImage = async (fileForm) => {
  const response = await Axios({
    url: API.FILE.UPLOAD,
    method: 'post',
    data: fileForm,
    fileUpload: true
  })
  if (response.data.code == '200') {
    return response.data.data
  }

  return null
}
