import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <Container>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p className="text-xl font-semibold">
        hello <strong>khalil baidouri</strong>, welcome to my ecommerce website, here you can
        find a wide range of products at competitive prices. We are committed to
        providing you with an exceptional shopping experience, offering
        high-quality products and excellent customer service. Happy shopping!
      </p>
      <Button>Button</Button>
    </Container>
  );
}
