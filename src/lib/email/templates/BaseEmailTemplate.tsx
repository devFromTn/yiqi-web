import { ReactElement } from "react";

import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Link,
  Img,
} from "@react-email/components";

// Define the props types for each template
export interface BaseEmailTemplateProps {
  content: string;
}

export function BaseEmailTemplate({
  content,
}: BaseEmailTemplateProps): ReactElement {
  // Placeholder for dynamic link, replace with actual link

  return (
    <Html>
      <Head />

      <Body className="bg-gray-100">
        <Container className="mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
          <Img
            src="https://via.placeholder.com/600x300"
            alt="Imagen del evento"
            className="w-full mb-6 rounded-lg"
          />
          <Text className="text-lg text-gray-600 mb-4">{content}</Text>

          <Text className="text-md text-gray-500 mt-6">
            Si tienes alguna duda, no dudes en contactarnos. ¡Te esperamos!
          </Text>
          <Link
            href="https://mi-plataforma.com"
            className="text-blue-600 underline mt-4"
          >
            Visita nuestro sitio web
          </Link>
        </Container>
      </Body>
    </Html>
  );
}