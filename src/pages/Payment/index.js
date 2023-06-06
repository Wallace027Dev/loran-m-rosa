import PageHeader from "../../components/PageHeader";
import PaymentCard from "../../components/PaymentCard";
import { ToggleSwitch } from "../../components/ToggleSwitch";

import { ToggleButtons, Paragraph } from "./styles";

export function Payment() {
  return (
    <>
      <PageHeader
        title="Pagamento"
        path={"../../"}
      />
      <Paragraph>
        Escolha quais anúncios quer veicular, e seu orçamento escolhido será dividido entre eles.
        <br />
        Seus anúncios serão exibidos por <b>sete </b>
        dias, e você poderá estender por mais dias.
      </Paragraph>

      <ToggleButtons>
        <ToggleSwitch
          adName="Reconhecimento"
          inputName="recognition"
          inputId="recognition"
        />
        <ToggleSwitch
          adName="Tráfego"
          inputName="traffic"
          inputId="traffic"
        />
        <ToggleSwitch
          adName="Mensagens Recebidas"
          inputName="receive-messages"
          inputId="receive-messages"
        />
        <ToggleSwitch
          adName="Curtidas na Página"
          inputName="page-likes"
          inputId="page-likes"
        />
        <ToggleSwitch
          adName="Turbinar Publicação"
          inputName="boost-publication"
          inputId="boost-publication"
        />
        <ToggleSwitch
          adName="Cadastros"
          inputName="registrations"
          inputId="registrations"
        />
        <ToggleSwitch
          adName="Vendas"
          inputName="sales"
          inputId="boost-publication"
        />
      </ToggleButtons>

      <Paragraph>
        Para liberar cadastros e vendar é preciso usar a plataforma por alguns dias, após será liberado um pixel para adicionar ao seu site.
      </Paragraph>

      <PaymentCard />
    </>
  )
}
