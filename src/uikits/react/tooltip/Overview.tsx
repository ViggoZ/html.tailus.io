import { Archive } from "lucide-react";
import Tooltip from "./Tooltip";
import Button from "@react-ui/button/Button";

export const Overview = () => (
  <Tooltip.Provider>
    <Tooltip.Root delayDuration={100}>
      <Tooltip.Trigger asChild>
        <Button.Root intent="warning">
          <Button.Icon type="only">
            <Archive />
          </Button.Icon>
        </Button.Root>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content className="z-50">
          Archive
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
    </Tooltip.Provider>
)


const exampleCode = `import { Archive } from "lucide-react";
import Tooltip from "@tailus-ui/Tooltip";
import Button from "@tailus-ui/Button";

export const Overview = () => (
  <Tooltip.Provider>
    <Tooltip.Root delayDuration={100}>
      <Tooltip.Trigger asChild>
        <Button.Root intent="warning">
          <Button.Icon type="only">
            <Archive />
          </Button.Icon>
        </Button.Root>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content>
          Archive
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
    </Tooltip.Provider>
)`

export const overviewCode = [
    {
        code: exampleCode,
        lang: "tsx",
    }
]