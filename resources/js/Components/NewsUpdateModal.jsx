import { Modal, Label, TextInput, FileInput, Dropdown } from "flowbite-react";
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import PrimaryButton from "./PrimaryButton";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function NewsUpdateModal({showModal, setShowModal, payload}) {
    const [title, setTitle] = useState(payload.title);
    const [image, setImage] = useState(payload.image);
    const [imageCaption, setImageCaption] = useState(payload.image_caption);
    const [content, setContent] = useState(payload.content);
    const [category, setCategory] = useState(payload.category);
    const [publishStatus, setPublishStatus] = useState(payload.publish_status);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
      };

    const handleUpdate = () => {
        const formData = new FormData();
        formData.append('title', title);

        if (image) {
            formData.append('image', image);
        }

        formData.append('imageCaption', imageCaption);
        formData.append('content', content);
        formData.append('category', category);
        formData.append('publishStatus', String(publishStatus));

        Inertia.post(`/api/update-news/${payload.id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.error(error);
        });
    };


    return (
        <>
          <Modal show={showModal} size="7xl" onClose={() => {
            setShowModal(false)
            window.location.assign(`/admin-posts`);
            }
            } popup>
            <Modal.Header />
            <Modal.Body>
              <div className="space-y-6">

                <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white">Draft Berita</h3>

                {/* Title */}
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="title" value="Judul Berita" />
                  </div>
                  <TextInput
                    id="title"
                    placeholder="Judul"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                  />
                </div>

                {/* Main Image */}
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="image" value="Gambar" />
                  </div>
                  <FileInput
                    id="image"
                    onChange={handleFileChange}
                    required
                  />
                </div>

                {/* Image Caption */}
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="imageCaption" value="Caption Gambar" />
                  </div>
                  <TextInput
                    id="imageCaption"
                    placeholder="Caption"
                    value={imageCaption}
                    onChange={(event) => setImageCaption(event.target.value)}
                    required
                  />
                </div>

                {/* Content */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="content" value="Konten Berita" />
                    </div>
                    <ReactQuill
                        id="content"
                        value={content}
                        onChange={(value) => setContent(value)}
                        modules={{
                            toolbar: [
                            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                            ['blockquote', 'code-block'],

                            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                            [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
                            [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
                            [{ 'direction': 'rtl' }],                         // text direction

                            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
                            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

                            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                            [{ 'font': [] }],
                            [{ 'align': [] }],                               // remove formatting button
                            ],
                        }}
                        />
                </div>

                {/* Category Dropdown */}
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="category" value="Kategori Berita" />
                  </div>
                    <Dropdown color="dark" className="border-black" id="category" label={category ? category : "Kategori Berita"}>
                        <Dropdown.Item onClick={() => setCategory('Olahraga')}>Olahraga</Dropdown.Item>
                        <Dropdown.Item onClick={() => setCategory('Hukum')}>Hukum</Dropdown.Item>
                        <Dropdown.Item onClick={() => setCategory('Sosial Budaya')}>Sosial Budaya</Dropdown.Item>
                        <Dropdown.Item onClick={() => setCategory('Kesehatan')}>Kesehatan</Dropdown.Item>
                        <Dropdown.Item onClick={() => setCategory('Keamanan')}>Keamanan</Dropdown.Item>
                    </Dropdown>
                </div>

                {/* Status Dropdown */}
                {/* <div>
                  <div className="mb-2 block">
                    <Label htmlFor="publishStatus" value="Status" />
                  </div>
                    <Dropdown color="dark" className="border-black" id="publishStatus" label={publishStatus ? 'PUBLISHED' : 'DRAFT'}>
                        <Dropdown.Item onClick={() => setPublishStatus(false)}>DRAFT</Dropdown.Item>
                        <Dropdown.Item onClick={() => setPublishStatus(true)}>PUBLISHED</Dropdown.Item>
                    </Dropdown>
                </div> */}

                {/* Update Button */}
                <div className="w-full text-right">
                  <PrimaryButton className="text-right" onClick={() => handleUpdate()}>Simpan</PrimaryButton>
                </div>

              </div>
            </Modal.Body>
          </Modal>
        </>
      );
}
