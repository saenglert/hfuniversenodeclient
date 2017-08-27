namespace hfuniverseclient {
    interface Action {
        entity: string;
        action: string;
        objective: string;
        options: string[];
    }

    interface Turn {
        player: string;
        actions: Action[];
    }
}