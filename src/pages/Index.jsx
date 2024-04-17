// Complete the Index page component here
// Use chakra-ui
import { useState } from "react";
import { Box, Button, Flex, Input, Textarea, useBreakpointValue, Image } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";

const Index = () => {
  const [url, setUrl] = useState("");
  const [markdown, setMarkdown] = useState("");
  const [screenshot, setScreenshot] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const fetchPageData = async () => {
    setLoading(true);
    try {
      // Simulated API call to fetch markdown and screenshot
      const markdownResponse = `# Example Page\n\nThis is a markdown version of the page at ${url}.`;
      const screenshotResponse = "https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBwYWdlJTIwc2NyZWVuc2hvdHxlbnwwfHx8fDE3MTMzNTI0Njl8MA&ixlib=rb-4.0.3&q=80&w=1080";
      setMarkdown(markdownResponse);
      setScreenshot(screenshotResponse);
    } catch (error) {
      console.error("Failed to fetch page data:", error);
      setMarkdown("Failed to load markdown.");
      setScreenshot("");
    }
    setLoading(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (url) {
      fetchPageData();
    }
  };

  const flexDirection = useBreakpointValue({ base: "column", md: "row" });

  return (
    <Box p={4}>
      <Flex direction="column" mb={4}>
        <Input placeholder="Enter URL here..." value={url} onChange={handleUrlChange} mb={2} />
        <Button leftIcon={<FaDownload />} colorScheme="teal" onClick={handleSubmit} isLoading={loading}>
          Generate Markdown
        </Button>
      </Flex>
      <Flex direction={flexDirection} align="center" justify="space-between">
        <Box flex="1" mr={2}>
          {screenshot && <Image src={screenshot} alt="Web page screenshot" />}
        </Box>
        <Box flex="1" ml={2}>
          <Textarea value={markdown} readOnly />
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;
