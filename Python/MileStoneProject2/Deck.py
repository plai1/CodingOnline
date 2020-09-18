import Card

class Deck:
    def __init__(self):
        self.all_cards = []
        for suit in Card.suits:
            for ranks in Card.ranks:
                self.all_cards.append(Card.Card(suit, ranks))

    def shuffle(self):
        random.shuffle(self.all_cards)

    def deal_one(self):
        return self.all_cards.pop()

if __name__ == "__main__":
    Deck_of_card = Deck()
    print(str(Deck_of_card.deal_one()))
    print(str(Deck_of_card.all_cards))
