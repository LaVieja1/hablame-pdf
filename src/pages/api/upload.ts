import type { APIRoute } from "astro";

import { v2 as cloudinary, type UploadApiResponse } from "cloudinary";
cloudinary.config({
  cloud_name: "djvf2vnbp",
  api_key: "279233182935242",
  api_secret: import.meta.env.CLOUDINARY_API_SECRET,
});

const uploadStream = async (
  buffer: Uint8Array,
  options: {
    folder: string;
  }
): Promise<UploadApiResponse> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(options, (error, result) => {
        if (result) return resolve(result);
        reject(error);
      })
      .end(buffer);
  });
};

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get("file") as File;

  if (file == null) {
    return new Response("File not found", { status: 404 });
  }

  const arrayBuffer = await file.arrayBuffer();
  const unit8Array = new Uint8Array(arrayBuffer);

  const result = await uploadStream(unit8Array, {
    folder: "pdf",
  });

  const { asset_id: id, url, pages } = result;

  return new Response(
    JSON.stringify({
      id,
      secure_url: url,
      pages,
    })
  );
};
