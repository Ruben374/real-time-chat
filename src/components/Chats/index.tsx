import { useContext, useEffect, useState } from "react";
import {
  Container,
  Header,
  SearchContainer,
  SerachArea,
  ChatContainer,
} from "./styles";
import { ChatCard } from "../ChatCard";
import { OpenChatContext } from "../../contexts/OpenChatContext";
import Loading from "../Loanding";
import { NewChatModal } from "../NewChatModal";
//import { ChatTypes } from "../../types/types";

export function Chats() {
  const { showChats, chats, openChatId } = useContext(OpenChatContext);
  const [isLoanding, setIsLoading] = useState(false);
  const [widthModal, setWidthModal] = useState("none");
  let index = 0;
  /*  useEffect(() => {
    console.log(chats);
  }, [chats]); */
  function closeModal() {
    setWidthModal("none");
  }
  return (
    <Container>
      <NewChatModal display={widthModal} onclick={closeModal} />
      <Header>
        <img src="/person.png" alt="person icon" />
        <div>
          <button onClick={() => setWidthModal("block")}>
            <img src="/message-icon.png" alt="message icon" />
          </button>
          <button>
            <img src="/more-icon.png" alt="more icon" />
          </button>
        </div>
      </Header>
      <SearchContainer>
        <SerachArea>
          <input placeholder="Buscar" type="search" />
          <img src="/search-icon.png" alt="search-icon" />
        </SerachArea>
      </SearchContainer>
      <ChatContainer>
        <p>Conversas</p>
        {chats.map((item: any, key: number) => (
          <ChatCard
            key={item._id}
            _id={item._id}
            author={
              item.users[0].id == "1234" ? item.users[1].name : item.users[0].name
            }
            time={item.messages[item.messages.length - 1].time}
            type={item.messages[item.messages.length - 1].type}
            body={item.messages[item.messages.length - 1].body}
          />
        ))}
      </ChatContainer>
    </Container>
  );
}
