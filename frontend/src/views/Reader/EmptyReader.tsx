import { Stack } from "@mui/material";
import EbookUploadBtn from "src/views/Reader/EbookUploadBtn";

export default function EmptyReader() {
  return (
    <Stack direction={"row"} justifyContent={"center"} py={2}>
      <EbookUploadBtn />
    </Stack>
  );
}
