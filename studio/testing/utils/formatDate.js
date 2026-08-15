import { dayjs } from "frappe-ui"

export const formatDate = (d) => dayjs(d).format("DD-MM-YYYY")