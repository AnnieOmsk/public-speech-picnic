-- Modifying images to local
ALTER TABLE broadcast CHANGE images image VARCHAR(255);
ALTER TABLE broadcast CHANGE images_link preview VARCHAR(255);
UPDATE broadcast SET preview=CONCAT("/images-cdn/", image, "/preview.jpg"), image=CONCAT("/images-cdn/", image, "/image.jpg")  WHERE image != "";