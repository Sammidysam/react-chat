react-chat
==========

The third Xtern Bootcamp project.
The goal of this project was to introduce React.

Next Steps
----------

The database structure is good, where the messages for a room is stored inside the room object (this differs from the class).
Take that a step further and add creation of organizations!
The rooms for an organization can be stored in the organization object similar to messages in a room.

Direct messages implemented, but a little bit ugly.
Next steps:
- More helper methods (note that otherUser() is repeated)
- Store full users in the rooms? Would be data duplication
- Make sure one does not create direct messages with themself
- Make sure one does not create a room without themselves in it

The class README can also probably suggest other improvements to make.