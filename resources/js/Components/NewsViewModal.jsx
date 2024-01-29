import { Modal, Label, Dropdown } from "flowbite-react";
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import HTMLReactParser from "html-react-parser";

export default function NewsViewModal({showModal, setShowModal, payload}) {
    const [title, setTitle] = useState(payload.title);
    const [image, setImage] = useState(payload.image);
    const [imageCaption, setImageCaption] = useState(payload.image_caption);
    const [content, setContent] = useState(payload.content);
    const [category, setCategory] = useState(payload.category);
    const [publishStatus, setPublishStatus] = useState(payload.publish_status);

    return (
        <>
          <Modal show={showModal} size="7xl" onClose={() => {
            setShowModal(false)
            }
            } popup>
            <Modal.Header />
            <Modal.Body>
              <div className="space-y-6">

                <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white">Draft Berita</h3>

                {/* Title */}
                <div>
                  <div className="mb-2 block text-2xl">
                    <Label className="text-2xl font-bold" htmlFor="title" value="Judul Berita" />
                  </div>
                  <h1>{title}</h1>
                </div>

                {/* Main Image */}
                <div>
                  <div className="mb-2 block text-2xl">
                    <Label className="text-2xl font-bold" htmlFor="image" value="Gambar" />
                  </div>
                  <img src={image} alt="" />
                </div>

                {/* Image Caption */}
                <div>
                  <div className="mb-2 block">
                    <Label className="text-2xl font-bold" htmlFor="imageCaption" value="Caption Gambar" />
                  </div>
                  <h2>{imageCaption}</h2>
                </div>

                {/* Content */}
                <div>
                    <div className="mb-2 block text-2xl">
                        <Label className="text-2xl font-bold" htmlFor="content" value="Konten Berita" />
                    </div>
                    {HTMLReactParser(content)}
                </div>

                {/* Category Dropdown */}
                <div>
                  <div className="mb-2 block text-2xl">
                    <Label className="text-2xl font-bold" htmlFor="category" value="Kategori Berita" />
                  </div>
                    <h3>{category}</h3>
                </div>

                {/* Status Dropdown */}
                {/* <div>
                  <div className="mb-2 block text-2xl">
                    <Label className="text-2xl font-bold" htmlFor="publishStatus" value="Status" />
                  </div>
                    <Dropdown color="dark" className="border-black" id="publishStatus" label={publishStatus ? 'PUBLISHED' : 'DRAFT'}>
                        <Dropdown.Item onClick={() => setPublishStatus(false)}>DRAFT</Dropdown.Item>
                        <Dropdown.Item onClick={() => setPublishStatus(true)}>PUBLISHED</Dropdown.Item>
                    </Dropdown>
                </div> */}

                {/* Update Button */}
                {/* <div className="w-full text-right">
                  <PrimaryButton className="text-right" onClick={() => handleUpdate()}>Simpan</PrimaryButton>
                </div> */}

              </div>
            </Modal.Body>
          </Modal>
        </>
      );
}
