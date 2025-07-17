import axios from "axios";

const image_hosting_key = process.env.NEXT_PUBLIC_ImgBbKey;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

export const upLoadImgBBPhoto = async (image) => {
    const upload = new FormData()
    upload.append('image', image)
   const { data } = await axios.post(image_hosting_api, upload)
    return data.data.url
}