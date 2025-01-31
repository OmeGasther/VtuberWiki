module tp.example {
    requires javafx.controls;
    requires javafx.fxml;

    opens tp.example to javafx.fxml;
    exports tp.example;
}
