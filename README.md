### Mini Pos

Mini Pos App built using the Frappe Framework + Frappe Studio. This test app is the first exported app from Studio

https://github.com/user-attachments/assets/825c534e-eb60-488b-b3f1-91f8bf315dc9

### Installation

### Local Setup

1. [Setup Bench](https://docs.frappe.io/framework/user/en/installation).
1. In the frappe-bench directory, run `bench start` and keep it running.
1. Open a new terminal session and cd into `frappe-bench` directory and run the following commands:

```bash
cd frappe
bench new-site pos.local
bench get-app studio
bench get-app https://github.com/ruchamahabal/mini_pos
bench --site pos.local install-app studio mini_pos
bench --site pos.local add-to-hosts
bench --site pos.local browse --user Administrator
```

### License

gpl-3.0
