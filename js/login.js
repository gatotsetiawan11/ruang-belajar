        if (!result.session_token) {
            throw new Error("Token sesi tidak tersedia.");
        }

        // Simpan sesi
        sessionStorage.clear();
        sessionStorage.setItem(LOGIN_MODE_KEY, "student");
        sessionStorage.setItem(SESSION_TOKEN_KEY, result.session_token);

        // simpan info utk tampilan cepat dashboard (mis. inisial)
        if (result.full_name) sessionStorage.setItem("student_name", result.full_name);
        if (result.nisn)      sessionStorage.setItem("student_nisn", result.nisn);
        if (result.student_id) sessionStorage.setItem("student_id", result.student_id);

        // Jika harus ganti PIN (mis. flow aktivasi) -> tetap arahkan
        if (result.pin_must_change === true) {
            sessionStorage.setItem(REGISTER_MODE_KEY, "activation");
            sessionStorage.setItem(PENDING_NISN_KEY, id);
            sessionStorage.setItem(PENDING_ID_TYPE_KEY, type);
            if (result.full_name) sessionStorage.setItem(PENDING_NAME_KEY, result.full_name);
            window.location.href = "register.html";
            return;
        }

        window.location.href = "dashboard.html";
