import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function AnotherScreen() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
        });
        if (data.length > 0) {
          setContacts(data);
        }
      }
    })();
  }, []);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Contacts:</Text>
        {contacts.map(contact => (
          <Text key={contact.id}>{contact.name} - {contact.phoneNumbers ? contact.phoneNumbers[0].number : 'No phone number'}</Text>
        ))}
      </View>
    </ScrollView>
  );
}
