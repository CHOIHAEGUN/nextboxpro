import { uploadImage } from './axios/file'

// {
//         "rgsnUserName": null,
//         "amnnUserName": null,
//         "rvsRnum": null,
//         "imgFileId": null,
//         "imgUrl": "https://localhost:7401/api/mk/v1/file/render/image/247585e1-7128-4db1-9cee-c7d1ee37f9fb",
//         "fileId": "247585e1-7128-4db1-9cee-c7d1ee37f9fb",
//         "fileNm": "img_cont05.png",
//         "filePath": "2024-04-02\\247585e1-7128-4db1-9cee-c7d1ee37f9fb\\img_cont05.png",
//         "fileEtns": "png",
//         "filePtrn": "image/png",
//         "fileSize": 5965
// }
export const uploadImageFile = async (imgFile, allowExtensions = ['jpg', 'JPG', 'JPEG', 'jpeg', 'PNG', 'png']) => {
  let file = imgFile
  let resObj = ''
  if (file === undefined) return //이미지 업로드 취소
  const fileForm = new FormData()
  fileForm.append('file', file)
  let fileName = file?.name?.split('.')
  if (fileName?.length && allowExtensions.includes(fileName[fileName.length - 1])) {
    resObj = await uploadImage(fileForm)
  } else alert('지원하지 않는 형식의 파일입니다.')
  return resObj
}

//    [{
//         "rgsnUserName": null,
//         "amnnUserName": null,
//         "rvsRnum": null,
//         "imgFileId": null,
//         "imgUrl": "https://localhost:7401/api/mk/v1/file/render/image/247585e1-7128-4db1-9cee-c7d1ee37f9fb",
//         "fileId": "247585e1-7128-4db1-9cee-c7d1ee37f9fb",
//         "fileNm": "img_cont05.png",
//         "filePath": "2024-04-02\\247585e1-7128-4db1-9cee-c7d1ee37f9fb\\img_cont05.png",
//         "fileEtns": "png",
//         "filePtrn": "image/png",
//         "fileSize": 5965
//     }]
export const uploadImageFiles = async (imgFiles) => {
  let imageData = []

  for (let i = 0; i < imgFiles.length; i++) {
    let file = imgFiles[i]
    const data = await uploadImageFile(file)
    if (data) imageData.push(data)
  }
  return imageData
}
