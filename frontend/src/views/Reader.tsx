import AppCard from "src/components/common/AppCard";
import { useIsEmptyBookStore } from "src/stores/ebooks";
import EmptyReader from "src/views/Reader/EmptyReader";

export default function Reader() {
  const isEmptyBookStore = useIsEmptyBookStore();

  return (
    <AppCard title="Reader">
      {isEmptyBookStore ? <EmptyReader /> : <></>}
    </AppCard>
  );
}
