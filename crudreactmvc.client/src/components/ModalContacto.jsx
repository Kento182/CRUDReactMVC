import { useEffect } from 'react';
import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter, Button } from 'reactstrap'

const modeloContacto = {
    idConacto: 0,
    nombre: '',
    correo: '',
    telefono: ''
}

function ModalContacto({ mostrarModal, setMostrarModal, guardarContacto, editar, setEditar, editarContacto }) {
    const [contacto, setContacto] = useState(modeloContacto);

    const enviarDatos = () => {
        if (contacto.idConacto === 0) {
            guardarContacto(contacto);
        } else {
            editarContacto(contacto);
        }
        setContacto(modeloContacto)
    }

    const actualizaDato = (e) => {
        setContacto({
            ...contacto,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        if (editar != null) {
            setContacto(editar)
        } else {
            setContacto(modeloContacto)
        }
    }, [editar])

    const cerrarModal = () => {
        setMostrarModal(!mostrarModal)
        setEditar(null)
    }

    return (
        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                {contacto.idConacto == 0 ? "Nuevo Contacto" : "Editar Contacto"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input name="nombre" onChange={(e) => actualizaDato(e)} value={contacto.nombre} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Correo</Label>
                        <Input name="correo" onChange={(e) => actualizaDato(e)} value={contacto.correo} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Telefono</Label>
                        <Input name="telefono" onChange={(e) => actualizaDato(e)} value={contacto.telefono} />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviarDatos}>Guardar</Button>
                <Button color="danger" size="sm" onClick={cerrarModal}>Cerrar</Button>
            </ModalFooter>
        </Modal>
    );
}

export default ModalContacto;