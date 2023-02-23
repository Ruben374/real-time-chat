import { useState, useContext } from "react";
import { OpenChatContext } from "../../contexts/OpenChatContext";
import { NewChatModalTypes } from "../../types";
import { Container, ContactCard, Header } from "./styles";

export function NewChatModal({ display, onclick }: NewChatModalTypes) {
  const { contact, OpenEmptyChat } = useContext(OpenChatContext);
  return (
    <Container display={display}>
      <Header>
        <button onClick={onclick}>
          <img src="/exit-icon.png" alt="Contact image" />
        </button>
        <span>Lista de contactos</span>
      </Header>
      {contact.map((item: any) => (
        <ContactCard onClick={OpenEmptyChat(item.name, item.email, "emptyChat")}>
          <img src="/person.png" alt="person icon" />
          <div>
            <span className="contact--name">{item.name}</span>
            <span className="contact--email">{item.email}</span>
          </div>
        </ContactCard>
      ))}
    </Container>
  );
}
