import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import { Button, Typography, Container } from "@material-ui/core";
import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from "ui/styles/pages/index.style";
import useIndex from "data/hooks/pages/useIndex.page";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />

      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={"99.999 - 999"}
            label={"Digite seu CEP"}
            fullWidth
            variant={"outlined"}
          />

          <Typography color={"error"}>CEP inválido</Typography>

          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
          >
            Buscar
          </Button>
        </FormElementsContainer>

        <ProfissionaisPaper>
          <ProfissionaisContainer>
            <UserInformation
              picture={"https://github.com/dsrivan.png"}
              name={"Ivan Rosa"}
              rating={4}
              description={"Cosmorama"}
            />
            <UserInformation
              picture={"https://github.com/dsrivan.png"}
              name={"Ivan Rosa"}
              rating={4}
              description={"Cosmorama"}
            />
            <UserInformation
              picture={"https://github.com/dsrivan.png"}
              name={"Ivan Rosa"}
              rating={4}
              description={"Cosmorama"}
            />
            <UserInformation
              picture={"https://github.com/dsrivan.png"}
              name={"Ivan Rosa"}
              rating={4}
              description={"Cosmorama"}
            />
            <UserInformation
              picture={"https://github.com/dsrivan.png"}
              name={"Ivan Rosa"}
              rating={4}
              description={"Cosmorama"}
            />
            <UserInformation
              picture={"https://github.com/dsrivan.png"}
              name={"Ivan Rosa"}
              rating={4}
              description={"Cosmorama"}
            />
          </ProfissionaisContainer>
        </ProfissionaisPaper>
      </Container>
    </div>
  );
}
